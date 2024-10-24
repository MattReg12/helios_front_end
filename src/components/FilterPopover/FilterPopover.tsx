import React from 'react';
import styles from './FilterPopover.module.css'

interface FilterPopoverProp {
  onClosingClick: (e: any) => void
}

const FilterPopover = React.forwardRef<HTMLDivElement, FilterPopoverProp>(( {onClosingClick}, ref) => {
  const [radioChoice, setRadioChoice] = React.useState<null | string>(null)

  const handleRadioSelection = function(e) {
    setRadioChoice(e.target.value)
  }

  React.useEffect(() => {
    document.addEventListener('click', onClosingClick);

    return (() => {
      document.removeEventListener('click', onClosingClick)
    })
  }, [])

  return (
    <div ref={ref} className={styles.popoverContainer}>
      <form>
        <fieldset>
          <input
            type="radio"
            name="today"
            id="today"
            value="today"
            checked={radioChoice === 'today'}// state change here boolean
            onChange={handleRadioSelection}
          />
          <label htmlFor="today">Today</label>
          <br />
          <input
            type="radio"
            name="yesterday"
            id="yesterday"
            value="yesterday"
            checked={radioChoice === 'yesterday'}
            onChange={handleRadioSelection}
          />
          <label htmlFor="yesterday">Yesterday</label>
          <br />
          <input
            type="radio"
            name="range"
            id="range"
            value="range"
            checked={radioChoice === 'range'}
            onChange={handleRadioSelection}
          />
          <label htmlFor="range">Last<input min='0'max='30' className={styles.numberInput}type='number'></input>Days</label>
        </fieldset>
      </form>
    </div>
  );
})

export default FilterPopover;

