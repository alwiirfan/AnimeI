export default function HeaderMenu({ title }) {
  return (
    <>
      <div className="p-8">
        <h3 className="text-center text-3xl font-bold text-color-primary">
          {title}
        </h3>
      </div>
    </>
  );
}
