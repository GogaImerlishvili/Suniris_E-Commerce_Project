import React,{useState} from 'react';

const OptionalInputs = ({ score, posters, stickers }) => {
    const [scoreChecked, setScoreChecked] = useState(false);
    const [postersChecked, setPostersChecked] = useState(false);
    const [stickersChecked, setStickersChecked] = useState(false);
  
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={scoreChecked}
            onChange={() => setScoreChecked(!scoreChecked)}
          />
          სამკაული
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={postersChecked}
            onChange={() => setPostersChecked(!postersChecked)}
          />
          პოსტერები
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={stickersChecked}
            onChange={() => setStickersChecked(!stickersChecked)}
          />
          ჩანთები
        </label>

<div>
<label>
  <input
    type="checkbox"
    name="score"
    checked={formData.get("score")}
    onChange={handleCheckboxChange}
  />
  სამკაული
</label>
<br />
<label>
  <input
    type="checkbox"
    name="posters"
    checked={formData.get("posters")}
    onChange={handleCheckboxChange}
  />
  პოსტერები
</label>
<br />
<label>
  <input
    type="checkbox"
    name="stickers"
    checked={formData.get("stickers")}
    onChange={handleCheckboxChange}
  />
  ჩანთები
</label>
</div>
      </div>

    );
  };

export default OptionalInputs;