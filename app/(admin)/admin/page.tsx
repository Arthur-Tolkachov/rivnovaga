export default function Main() {
  return (
    <div>
      <h2 className="text-primary-dark">Основна iнформацiя</h2>

      <form>
        <div className="flex flex-col gap-2">
          <label>Назва компанії:</label>
          <input type="text" className="w-[300px]" />
        </div>
      </form>
    </div>
  );
}
