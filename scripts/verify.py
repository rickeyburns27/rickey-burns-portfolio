#!/usr/bin/env python3
"""No-dependency static smoke check for the website."""
from pathlib import Path
import re
import sys
root = Path(__file__).resolve().parent.parent
html = (root / 'index.html').read_text(encoding='utf-8')
content = (root / 'assets/js/content.js').read_text(encoding='utf-8')
style = (root / 'assets/css/styles.css').read_text(encoding='utf-8')
main = (root / 'assets/js/main.js').read_text(encoding='utf-8')
errors = []

def expect(cond, label):
    if not cond:
        errors.append(label)

for asset in [
    'assets/css/styles.css', 'assets/js/content.js', 'assets/js/main.js',
    'assets/images/rickey-burns.webp', 'assets/images/six-site.webp',
    'assets/images/five-site.webp', 'assets/images/new-york.webp',
    'assets/images/case-study-poster.webp', 'assets/images/favicon.svg',
    'assets/docs/Rickey_Burns_Enterprise_Transformation_Case_Study.pdf',
    'assets/docs/case-study-source.html',
    'assets/images/mountain-road-case-study.png',
]:
    expect((root / asset).is_file(), f'missing asset {asset}')
for section in ['impact', 'journey', 'approach', 'experience', 'strengths', 'contact']:
    expect(f'id="{section}"' in html, f'missing section #{section}')
for field in ['25,', '60,', '50,', '1000,', '100,']:
    expect(field in content or field in html, f'missing approved metrics marker {field}')
expect("value: 100, suffix: '%'" in content and 'Committed milestones completed' in content, 'missing 100% committed milestones metric')
for stage in ['Field integration', 'Systems engineering', 'Application & data migration PM', 'Accountable integration leader']:
    expect(stage in content, f'missing career stage: {stage}')
for item in ['six-site.webp', 'five-site.webp', 'new-york.webp']:
    expect(item in content, f'missing case photograph: {item}')
expect('prefers-reduced-motion' in style, 'reduced-motion CSS missing')
expect('prefers-reduced-motion' in main, 'reduced-motion JavaScript missing')
expect('aria-expanded' in html and 'aria-expanded' in main, 'mobile nav a11y missing')
expect('rickey-burns-pmp-78273a189' in content, 'LinkedIn contact not configured')
expect('rickeyburns27@gmail.com' in content, 'email contact not configured')
for x in re.findall(r'(?:href|src)="(assets/[^"#]+)"', html):
    expect((root / x).is_file(), f'broken internal link {x}')
expect('<!-- PLACEHOLDER' not in html, 'placeholder in public website')
case_source = (root / 'assets/docs/case-study-source.html').read_text(encoding='utf-8')
arrow_rows = re.findall(r'<div class="arrowline(?: green)?"[^>]*>(.*?)</div></div>', case_source)
expect([row.count('class="arrow"') for row in arrow_rows] == [6, 3],
       'case study must have six blue arrows and three green arrows')
expect('Annual revenue' in case_source and 'Committed milestones completed' in case_source,
       'case study must retain verified revenue and milestone wording')
if errors:
    print('FAILED:')
    for error in errors:
        print(' -', error)
    sys.exit(1)
print('PASS: required files, sections, metrics, contact links, images, and accessibility flags')
