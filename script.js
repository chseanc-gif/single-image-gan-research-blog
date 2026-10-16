'use strict';
const variants = {
  historical: {label:'My original run 2.21', note:'My trained mapping and blend coefficients, combined with the official source mapping. New renders from my saved checkpoint; no additional training.'},
  historical1: {label:'My original run 1', note:'A second checkpoint from my original training, using its own saved mapping and blend coefficients with the same official source mapping. No additional training.'},
  rank32: {label:'Rank-32 compression · historical biases retained', note:'Post-hoc SVD of historical mapping changes. Historical biases and blend retained. Zero training updates; this measures capacity, not learned LoRA performance.'},
  reset: {label:'Rank-32 compression · biases reset to pretrained values', note:'The same compressed mapping weight changes, with pretrained biases. Historical blend retained. Zero training updates.'},
  mapping: {label:'Mapping-only LoRA · rank 32 · step 6,000', note:'A newly trained adapter. Distorted vintage-like geometry and reduced useful variation; no demonstrated improvement over the historical model.'},
  both: {label:'Mapping + synthesis LoRA · rank 8 · step 6,000', note:'Selected by numerical screening, then rejected on visual quality. The improved target distance coexists with stripes, malformed windows, and repeated textures.'}
};
const selector = document.querySelector('#model-select');
function updateComparison() {
  const key = selector.value;
  const bank = document.querySelector('input[name="bank"]:checked').value;
  const count = {new16:16, fixed:4, development:12}[bank];
  const bankLabel = {new16:'new matched', fixed:'fixed', development:'development'}[bank];
  for (const [imageId, linkId, prefix, label] of [
    ['source-grid','source-full','source','Pretrained source'],
    ['adapted-grid','adapted-full',key,variants[key].label]
  ]) {
    const img = document.getElementById(imageId);
    img.src = `assets/${prefix}-${bank}.png`;
    img.alt = `${label}: all ${count} ${bankLabel} samples, in the saved order. Open full resolution.`;
    img.width = 2058;
    img.height = {new16:2058, fixed:516, development:1544}[bank];
    document.getElementById(linkId).href = img.src;
  }
  document.querySelector('#model-label').textContent = variants[key].label;
  document.querySelector('#comparison-note').textContent = variants[key].note;
}
selector.addEventListener('change', updateComparison);
document.querySelectorAll('input[name="bank"]').forEach(el => el.addEventListener('change', updateComparison));
const count = document.querySelector('article').innerText.trim().split(/\s+/).length;
document.querySelector('#reading-time').textContent = `${Math.ceil(count / 220)} min read`;
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('.contents a')];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      links.forEach(link => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current','location');
        else link.removeAttribute('aria-current');
      });
    }
  }, {rootMargin:'-10% 0px -65% 0px'});
  document.querySelectorAll('article section').forEach(section => observer.observe(section));
}
