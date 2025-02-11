

function Navbar() {
  return (
    <nav>
      <div className="flex justify-around items-center py-12">
        <div>
          <img src="" alt="" />
          <h2>restaurant</h2>
        </div>
        <ul className="flex flex-row gap-6">
          <li>Menu</li>
          <li>Events</li>
          <li>Gallery</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <a className="bg-orange-600 text-white rounded-tl-md rounded-br-md py-3 px-4" href="">book a table</a>
      </div>
    </nav>
  );
}

export default Navbar;
