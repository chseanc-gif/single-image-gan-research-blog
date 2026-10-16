# One Image, Many Possibilities

A figure-led research blog by Sean Chen about single-image GAN adaptation, recovered StyleGAN2 experiments, low-rank capacity, and visual evaluation.

[Read the research blog](https://chseanc-gif.github.io/single-image-gan-research-blog/).

Open `index.html` directly, or preview with:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

The page is buildless HTML, CSS, and JavaScript. It uses system fonts and local assets, with no analytics, external scripts, or inference service. The selector displays saved experimental outputs. The main article, initial comparison, and evidence remain available without JavaScript. The page includes a print stylesheet.

## Publish with GitHub Pages

This directory is published as its own repository. In Settings → Pages, **GitHub Actions** is the build source. A push to `main` (the publication branch) or `codex/research-blog` runs `.github/workflows/pages.yml`, uploading only the article, styling, interaction script, evidence file, and assets. The workflow can also be run manually.

The surrounding research workspace is not part of this release. Do not upload its checkpoints, original archives, private logs, or credentials.

## Evidence and image provenance

`evidence.json` records extracted measurements, source-file hashes, asset hashes, and limitations. Sample images are unchanged copies of existing experiment artifacts, preserving order and full banks. The method diagram is explanatory artwork; it is not an experimental output.

The reference photograph is the original project asset. Its separate authorship and license are not established in recovered records. This release grants no new license to that image or third-party model materials. The blog links to upstream research and implementations; no model weights or vendored model code are distributed.

The latest GenDA photographic reference crops are not included. The article reports preliminary numerical summaries with their single-reference, single-seed, development-only limitations. It does not claim an exact reproduction or a benchmark improvement.

Research snapshot: October 14, 2026, America/Los_Angeles.

Augmentation documentation added October 16, 2026: original notebook pipeline, six consecutive saved input transformations, two discriminator views, and the paired cutout audit. The seven added PNGs are unchanged research artifacts; extracted parameters, source hashes, and limitations are recorded in `evidence.json`.
