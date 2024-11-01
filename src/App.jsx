import { useState } from "react";
//  상태 = 데이터를 저장할 변수
// import React from "react";
import "./App.css";
import "./CSS/SocialsBtn.css";
import "./CSS/FormInput.css";
import "./CSS/addButton.css";
import CountryItem from "./components/CountryItem";
import InputFiled from "./components/InputFiled";
import SocialsContainer from "./components/sns";

const App = () => {
  const [countryName, setCountruName] = useState("");
  const [goldMedal, setGoldMedal] = useState(0);
  const [silverMedal, setSilverMedal] = useState(0);
  const [bronzeMedal, setBronzeMedal] = useState(0);

  // 사용자가 입력한 국가와 매달갯수가 있는 데이터
  const [medalCountries, setmedalCountries] = useState([]);

  // 사용자에게 국가명을 입력받는 함수
  const inputcountryName = (e) => {
    setCountruName(e.target.value);
  };

  // 메달 갯수를 입력받는 함수
  const inputGoldMedal = (e) => {
    setGoldMedal(Number(e.target.value));
  };

  const inputSilverMedal = (e) => {
    setSilverMedal(Number(e.target.value));
  };

  const inputBronzeMedal = (e) => {
    setBronzeMedal(Number(e.target.value));
  };

  // 추가하기 기능 함수
  const addCountry = (e) => {
    e.preventDefault();

    let result = medalCountries.some((country) => country.name === countryName);

    if (result) {
      alert("이미 등록된 국가입니다.");
      return;
    }

    if (!countryName) {
      alert("국가를 입력해주세요.");
      return;
    }

    const newData = {
      name: countryName,
      gold: goldMedal,
      silver: silverMedal,
      bronze: bronzeMedal,
    };

    setmedalCountries([...medalCountries, newData]);

    setBronzeMedal(0);
    setSilverMedal(0);
    setGoldMedal(0);
    setCountruName("");
  };

  // 삭제하기 기능 함수
  const deleteCountry = (name) => {
    let newCountries = medalCountries.filter(
      (country) => country.name !== name
    );

    setmedalCountries([...newCountries]);
  };

  // 업데이트 기능 함수
  const updataCountry = () => {
    let result = medalCountries.some((country) => country.name === countryName);
    if (result) {
      let newArr = medalCountries.map((country) =>
        country.name === countryName
          ? {
              ...country,
              name: countryName,
              gold: goldMedal,
              silver: silverMedal,
              bronze: bronzeMedal,
            }
          : country
      );
      setmedalCountries([...newArr]);
    } else {
      alert("해당 국가가 존재하지 않습니다.");
    }
  };

  const selectMeadalList = (e) => {
    if (e.target.value === "goldMedal") {
      let newArr = medalCountries.sort((a, b) => b.gold - a.gold);
      setmedalCountries([...newArr]);
    } else if (e.target.value === "totalMedal") {
      let newARR1 = medalCountries.sort(
        (a, b) => b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze)
      );
      setmedalCountries([...newARR1]);
    } else {
      return;
    }
  };

  return (
    <div>
      <div className="container">
        <h1>🗼2024 파리 올림픽🗼</h1>

        <SocialsContainer />

        <form onSubmit={addCountry}>
          <InputFiled
            className="input-field"
            name="🏳️‍🌈"
            id="name"
            type="text"
            value={countryName}
            onChange={inputcountryName}
            placeholder="국가를 입력해 주세요..."
          />

          <InputFiled
            className="input-field"
            name="🥇"
            type="number"
            id="gold"
            value={goldMedal}
            onChange={inputGoldMedal}
          />

          <InputFiled
            className="input-field"
            name="🥈"
            type="number"
            id="silver"
            value={silverMedal}
            onChange={inputSilverMedal}
          />

          <InputFiled
            className="input-field"
            name="🥉"
            type="number"
            id="bronze"
            value={bronzeMedal}
            onChange={inputBronzeMedal}
          />

          <div className="addButton">
            <button className="buttonField" type="submit">
              국가 추가
            </button>
            <button
              className="buttonField"
              type="button"
              onClick={updataCountry}
            >
              업데이트
            </button>
          </div>
        </form>

        <div>
          <select onChange={selectMeadalList}>
            <option value="default">정렬 기준</option>
            <option value="goldMedal">금메달 순으로 정렬</option>
            <option value="totalMedal">총 메달 합순으로 정렬</option>
          </select>
        </div>
      </div>
      <div className="out-value">
        {medalCountries.length > 0 ? (
          medalCountries.map((country) => (
            <CountryItem
              key={country.name}
              country={country}
              onClick={deleteCountry}
            />
          ))
        ) : (
          <p className="title-container">데이터가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default App;

// [].sort((a, b) => b - a);
