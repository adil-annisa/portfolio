const logos = {
  "goldman-sachs": "goldman.svg",
  charitystack: "charitystack.png",
  "an-nisa-hope-center": "annisa.png",
  "annisa-systems": "annisa.png",
  "ut-austin": "ut-austin.png",
  "soil-moisture": "ut-austin.png",
  helm: "helm.svg",
  roomsync: "student-living.png",
  bounceback: "convergent.png",
};
export default function EntryMark({ id }) {
  const logo = logos[id];
  if (!logo) return null;
  return (
    <span className={`entry-mark mark-${id} brand-mark`} aria-hidden="true">
      <img src={`/media/logos/${logo}`} alt="" width="72" height="72" loading="lazy" />
    </span>
  );
}
