# Photo and Media Map

Use this folder as the single place to swap site photos, GIFs, and videos.

## Main Site Photos

- `photos/hero/hero-pyramid.webp` - large hero image on the Home screen.
- `photos/programs/cheer-classes.webp` - Cheer Classes program card.
- `photos/programs/tumbling.webp` - Tumbling program card.
- `photos/programs/private-lessons.webp` - Private Lessons program card.
- `photos/about/private-lessons.webp` - About Bloom image.
- `photos/about/shelley-crosthwait-headshot.webp` - Coach Shelley Crosthwait bio photo.

To replace one of these, keep the same filename and drop the new image into the same folder.

## Media Gallery

- `media/practice/` - practice photo posts shown in the Media section.
- `media/competition/` - competition photo posts shown in the Media section.
- `media/gifs/` - animated GIF posts shown in the Media section.
- `media/videos/` - MP4 video posts shown in the Media section.

When adding a new gallery item, place the file in the matching folder, then add an entry in `js/media.js`.

Example:

```js
{
  title: 'Cartwheel clinic',
  date: 'May 2026',
  category: 'practice',
  type: 'photo',
  src: 'assets/media/practice/cartwheel-clinic-may-2026.webp',
  alt: 'Athlete practicing cartwheels',
  caption: 'A focused clinic for clean shapes and confident landings.'
}
```

## Naming Tips

- Use lowercase words separated by hyphens.
- Include the section or event name, such as `cheer-classes.webp` or `competition-day-smiles.webp`.
- Use `.webp` for photos and animated clips when possible, and `.mp4` for videos.
