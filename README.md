# 2024 PARIS Medal Country

2024년 파리 올림픽 메달 획득 수를 표현한다.

각 국의 금,은,동 메달을 얼마나 수상 했는지 추가 및 수정,삭제가 가능하다.
```jsx

1. Component를 사용하여 입력값을 따로 관리하여 재사용성을 높임

- <SocialsContainer/> 소셜미디어 버튼을 따로 관리함
- <InputFiled Input/> 메달 입력값을 따로 관리함
- <CountryItem Input/> 메달 출력값을 따로 관리함

2. 메달 갯수를 입력받는 함수

  const inputcountryName = (e) => {
    setCountruName(e.target.value);
  };

  const inputGoldMedal = (e) => {
    setGoldMedal(Number(e.target.value));
  };
- 숫자열로만 입력받음

3. 추가하기 기능 함수
- 이벤트가 적용 될때마다 새로고침 하는걸 막음
- some메서드를 사용해서 둘중에 하나라도 맞을 경우 첫번째 실행
- countryName을 입력받지 못할경우 두번째 실행
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
    }}

4. 삭제하기 함수
const deleteCountry = (name) => {
    let newCountries = medalCountries.filter(
      (country) => country.name !== name
    )};

    setmedalCountries([...newCountries]);

