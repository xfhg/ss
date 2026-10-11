> **SS development fork:** This checkout uses the SS app name and the separate `com.xfhg.ss` data directory. The Shimasu AI engine sidebar entry is currently just a placeholder; it does not run the CLI. Upstream automatic updates are disabled. The original Lap documentation and acknowledgements follow; its release links refer to Lap, not an SS build.

<div align="center">
  <img src="docs/public/icon.png" alt="SS(Lap) Logo" width="120" style="border-radius: 20px">
  <h1>SS - Automated Media Identifier</h1>
  <h3>Open-source desktop media categorizer for macOS, Windows, and Linux.</h3>
  <!-- <p>
    <a href="https://trendshift.io/repositories/24497?utm_source=repository-badge&amp;utm_medium=badge&amp;utm_campaign=badge-repository-24497" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/repositories/24497" alt="julyx10%2FSS(Lap) | Trendshift" width="250" height="55"/></a>
  </p>
  <p>
    <a href="https://github.com/julyx10/SS(Lap)/releases"><img src="https://img.shields.io/github/v/release/julyx10/SS(Lap)" alt="GitHub release"></a>
    <a href="https://github.com/julyx10/SS(Lap)/releases"><img src="https://img.shields.io/github/downloads/julyx10/SS(Lap)/total" alt="GitHub all releases"></a>
    <a href="https://github.com/julyx10/SS(Lap)/stargazers"><img src="https://img.shields.io/github/stars/julyx10/SS(Lap)" alt="GitHub stars"></a>
  </p> -->
</div>

<!-- English | [Deutsch](i18n/README.de.md) | [Español](i18n/README.es.md) | [Français](i18n/README.fr.md) | [Italiano](i18n/README.it.md) | [Magyar](i18n/README.hu.md) | [Nederlands](i18n/README.nl.md) | [Polski](i18n/README.pl.md) | [Português](i18n/README.pt.md) | [Русский](i18n/README.ru.md) | [Українська](i18n/README.uk.md) | [中文简体](i18n/README.zh-CN.md) | [中文繁體](i18n/README.zh-TW.md) | [日本語](i18n/README.ja.md) | [한국어](i18n/README.ko.md) -->

SS(Lap) is an open-source, local-first photo manager for browsing family albums, finding old photos quickly, and managing large personal media libraries offline.
It is a privacy-focused alternative to cloud photo services: no forced upload, local AI search, folder-first workflow, and free to use.

## Screenshots

<p align="center">
  <img src="docs/public/screenshots/lap_library.png" alt="SS(Lap) local photo library manager" width="900">
  <img src="docs/public/screenshots/lap_map_view.png" alt="SS(Lap) map view" width="900">
  <img src="docs/public/screenshots/lap_montage.png" alt="SS(Lap) photo collage" width="900">
</p>

## Why SS(Lap)

- **Local-first by design**: your photos stay on your own disk, with no required cloud account or upload.
- **No library lock-in**: work directly with your existing folders instead of importing everything into a closed database.
- **Private AI tools**: search, similarity, smart tags, and face features run locally on your machine.
- **Built for large collections**: optimized for smooth browsing and organization across libraries with 100k+ files.
- **Open source and free**: no subscription, no forced ecosystem, and code you can inspect.

## Features

- **Flexible library browsing** by date, folder, location, camera, lens, tags, ratings, and faces, with sorting and search.
- **Folder-first workflow** with multiple libraries, drag-&-drop import/export, copy-paste import/export, filesystem sync, and safe move/copy/delete operations.
- **Local AI search** for text prompts, visual similarity, subjects, face clustering, and optional multilingual search in 50+ languages.
- **Smart Albums** save rule-based views with custom grouping and sorting.
- **Date-organized import** with day, month, year, or single-folder layouts, original filenames, and duplicate skipping.
- **Collections and tags** to organize selected files in bulk without moving or duplicating the originals.
- **Duplicate cleanup** with reclaimable-space summaries and bulk removal across duplicate sets.
- **Culling and comparison tools** including a four-pane image comparison viewer.
- **Built-in editing** for crop, arbitrary-angle straighten, rotate, flip, resize, and basic image adjustments.
- **Photo Collage** to compose selected photos into grid, justified-mosaic, or picture-pile layouts.
- **Apple Live Photos and Google Motion Photos** with motion playback and a unified Smart Album filter.
- **RAW + JPEG/HEIC pairs** displayed as one item, with linked files kept together during file operations.
- **Configurable RAW thumbnails and previews** using RAW rendering or the camera's embedded preview, with adjustable brightness and RAW+JPEG pair display.
- **Interactive Map View** to explore geotagged photos and videos in clusters that follow your current filters.
- **Offline album browsing** that keeps albums on disconnected or network storage visible with cached thumbnails.
- **Broad format support** for 60+ photo, RAW, and video formats.

## Metadata, Collections, and Moving Files

SS(Lap) is folder-first, but not every piece of information shown in SS(Lap) is embedded in the original file. This distinction matters when you also manage the same folders in Finder, Explorer, or another photo app.

### What stays with the file

- Your original photos and videos always remain ordinary files in their existing folders.
- File metadata already embedded in a file, such as EXIF capture date, camera, lens, GPS, and orientation, is read from that file when SS(Lap) indexes it.
- Saving a built-in image edit writes the resulting image to the selected destination.
- When you rename, move, copy, or delete files **in SS(Lap)**, SS(Lap) updates its local catalog at the same time. It also keeps supported grouped assets, such as Apple Live Photo components, AAE sidecars, and enabled RAW + JPEG/HEIC pairs, together.

### What is stored locally by SS(Lap)

The following are SS(Lap) library data. They are stored in SS(Lap)'s local database or library configuration, not written into EXIF, IPTC, or XMP sidecars:

- Collections, Tags, Comments, Favorites, Ratings, and Culling states (including Picks and Rejects)
- Smart Albums and their rules, grouping, sorting, and ordering
- AI search data, face data, thumbnails, and other index/cache data

This data does not travel with a file when it is copied, exported, or moved outside SS(Lap), and it is not available automatically to other applications.

### Working with files outside SS(Lap)

SS(Lap) can rescan folders and detect many filesystem changes. But changes made outside SS(Lap)—such as renaming, moving, replacing, or copying files—can disrupt organization that is stored only in SS(Lap).

For the most reliable results, rename and move files in SS(Lap) whenever you rely on Collections, Tags, Comments, Favorites, Ratings, or culling states. If you also manage files outside SS(Lap), back up SS(Lap)'s database and configuration together with your photos. You can manage the database location and create a backup in **Settings → Storage**.

Deleting SS(Lap)'s database or configuration removes this local organization and index data, but does not delete your original media files.

## Supported Formats

SS(Lap) supports 60+ photo, RAW, and video formats.

| Type | Formats |
| :--- | :--- |
| Images | JPG/JPEG/JFIF, PNG, GIF, BMP, TIFF, WebP, HEIC/HEIF/HIF, AVIF, JXL, PSD, EXR, HDR/RGBE, TGA, JPEG 2000 (JP2/J2K/J2C/JPC/JPF/JPX), DDS, DPX, QOI |
| RAW photos | CR2, CR3, CRW, NEF, NRW, ARW, SRF, SR2, RAF, RW2, ORF, PEF, DNG, SRW, RWL, MRW, 3FR, MOS, DCR, KDC, ERF, MEF, RAW, MDC |
| Videos | MP4, MOV, M4V, MKV, AVI, FLV, TS/M2TS, WMV, WebM, 3GP/3G2, F4V, VOB, MPG/MPEG, ASF, DIVX and more. H.264 playback is supported on all platforms, with automatic compatibility processing when native playback is unavailable. HEVC/H.265 and VP9 are natively supported on macOS. |

### Linux Video Playback

SS(Lap) uses system GStreamer plugins for video playback, including in the AppImage. If videos fail to play on Ubuntu, Debian, or Linux Mint, install:

```bash
sudo apt install gstreamer1.0-libav gstreamer1.0-plugins-good
```

## Architecture

- Core: Tauri + Rust
- Frontend: Vue + Vite + Tailwind CSS
- Data: SQLite

### Key Libraries

| Library | Purpose |
| :-- | :-- |
| [LibRaw](https://github.com/LibRaw/LibRaw) | RAW image decoding and thumbnail extraction |
| [libheif](https://github.com/strukturag/libheif) | HEIC/HEIF/HIF image decoding and preview generation |
| [libjpeg-turbo](https://libjpeg-turbo.org/) | Fast JPEG decoding and thumbnail generation |
| [FFmpeg](https://ffmpeg.org/) | Video processing and thumbnail generation |
| [Video.js](https://videojs.com/) | Cross-platform video playback UI |
| [ONNX Runtime](https://onnxruntime.ai/) | Local AI model inference engine |
| [CLIP](https://github.com/openai/CLIP) | Image-text similarity search |
| [InsightFace](https://github.com/deepinsight/insightface) | Face detection and recognition |
| [Leaflet](https://leafletjs.com/) | Interactive map for geotagged photos |
| [daisyUI](https://daisyui.com/) | UI component library |

## License

GPL-3.0-or-later. See [LICENSE](LICENSE).

## Privacy

Read the [Privacy Policy](PRIVACY.md) for details on data handling and optional online services.
