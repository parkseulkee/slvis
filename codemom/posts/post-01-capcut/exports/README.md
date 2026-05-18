# Post 01 — 캡컷 에피소드 Export 패키지

## 포함된 파일

- `html/*.html` — 실물 렌더 (Chrome에서 열면 정확한 1080×1350 슬라이드 확인 가능)
- `svg/*.svg` — foreignObject 기반 SVG. Figma 임포트 시 텍스트가 래스터화될 수 있음
- `png/*.png` — 2160×2700 (2x) PNG. 인스타 업로드용

## PNG 재생성

프로젝트 루트에서:

```bash
node scripts/export-png.js posts/post-01-capcut
```

자세한 옵션·트러블슈팅은 `skills/codemom-slide-production/EXPORT_GUIDE.md` 참조.
