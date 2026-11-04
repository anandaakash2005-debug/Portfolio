<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

- Keep hero-specific presentation in scoped hero utilities and the existing PortraitFrame, so refinements do not alter other portfolio sections.

- Ship project demo clips as a WebM + MP4 source pair from CDN asset pointers, so every browser gets a format it can play.

- Keep project card panels to a short muted loop and give each card one primary action; do not embed long narrated recordings or extra playback controls unless the user asks for them.

- Between-hero furniture (StackMarquee, StartHere paths, header IST clock) lives as small standalone components in index.tsx; the marquee animates via the animate-marquee utility in styles.css and relies on the global reduced-motion reset.

- Keep the IST timer state inside IstClock rather than Header so clock ticks do not re-render navigation; preload the portrait in the owning route head to prioritize the first-screen image.
