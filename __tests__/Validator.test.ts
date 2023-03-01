import Validator from "../src/domain/Validator";

describe("카테고리 유효성 검사", () => {
  test.each([["몰?루"], [""], ["한식1"], [" 한식"]])(
    "(실패 사례) 카테고리 입력값 %s 유효성 검사",
    (input) => {
      expect(() => Validator.checkCategory(input)).toThrow("에러 1");
    }
  );

  test.each([["한식"], ["중식"], ["일식"], ["아시안"], ["양식"], ["기타"]])(
    "(성공 사례) 카테고리 입력값 %s 유효성 검사",
    (input) => {
      expect(() => Validator.checkCategory(input)).not.toThrow();
    }
  );
});

