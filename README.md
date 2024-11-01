# 2024 PARIS Medal Country

2024년 파리 올림픽 매달 획득 수를 표현한다.

각 국의 금,은,동 매달을 얼마나 수상 했는지 추가 및 수정,삭제가 가능하다.

1. Component를 사용하여 input값을 따로 관리하여 재사용성을 높임
   <InputFiled
           className="input-field"
           name="🏳️‍🌈"
           id="name"
           type="text"
           value={countryName}
           onChange={inputcountryName}
           placeholder="국가를 입력해 주세요..."
         />
