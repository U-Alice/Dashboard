import './page1.css';
export function Side1() {
  return (
    <div className="side1">
      <picture>
        <source srcSet="https://i.pinimg.com/originals/bb/b1/82/bbb182eb71d07dfd535018eb0a59ed92.gif" type="image/avif" />
        <img
          width="1280"
          height="720"
          decoding="async"
          loading="lazy"
          src="https://i.pinimg.com/originals/bb/b1/82/bbb182eb71d07dfd535018eb0a59ed92.gif"
          alt="an avif image"
        />
      </picture>
    </div>
  );
}
