import { useEffect, useRef, useState } from "react";
import { Search } from "./Search";

function debounce(fnc: any, time: number | undefined = 300): any {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('debouncing');
      return fnc.apply(this, args);
    }, time);
  };
}


function App() {
  const [showPopup, setShowPopup] = useState(false);
  const leftColumn = useRef<HTMLDivElement | null>(null)

  const fieldChange = (...args: any) => {
    if (!args) return;
    const evt = args[0];
    evt?.stopPropagation();
    const val = evt.target?.value;
    setShowPopup(!!val)
  }

  const debouncedChange = debounce(fieldChange);

  const preventScroll =
    (evt: WheelEvent) => {

      /** comment the next line to see fix bad behavior */
      return;

    }

  leftColumn.current?.addEventListener('wheel', preventScroll);

  useEffect(() => {
    if (!showPopup) {
      leftColumn.current?.removeEventListener('wheel', preventScroll);
    }

    return () => leftColumn.current?.removeEventListener('wheel', preventScroll);


  }, [showPopup])

  return (
    <>
      <div className="container">
        <div className='leftColumn' ref={leftColumn}>
          <div className="list">
            <Search callback={debouncedChange} />
            <ul>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </div>
          <div className="list">
            <Search callback={debouncedChange} />
            <ul>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </div>
          <div className="list">
            empty
          </div>
          <div className="list">
            empty
          </div>
          <div className="list">
            empty
          </div>

        </div>
        <div className="centerColumn">
          <p style={{ marginBottom: '20px' }} > <strong>Problem:</strong> Left column scrolls with mousewheel even while popup /search results are shown</p>

          <p><strong>Solution:</strong> Find the `preventScroll` method and comment out the `return`. <br />
            Scrolling left column will cease to scroll whenever a popup is shown.
            This prevents the left column from scrolling as the user mousewheels</p>
          <p>This is done by ensuring the `wheel` events don't trigger</p>
        </div>
      </div >
      <div className={`popup ${showPopup ? 'show' : ''}`}>
        <a href="#" className="close" onClick={(evt) => {
          evt.preventDefault();
          setShowPopup(false)
        }}>X</a>
        <br />
        <br />
        <br />
        <br /> scroll down
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />content
        <br /> scroll down
        <br />
        <br />
        <br />
        end
      </div>
    </>
  )
}

export default App
