import React, { useState, useEffect } from "react";

interface TimerProps {
  initialTime: number;
}

const Timer: React.FC<TimerProps> = ({ initialTime }) => {
  const [time, setTime] = useState<number>(initialTime);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerId);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [time]);

  return (
    <div>
      <span className={""}>
        {time > 0 ? (
          <p className={"text-center mt-6"}>
            زمان باقی مانده تا انقضای کد
            <span
              className={
                "text-red-500 font-bold border border-red-500 rounded py-0.5 px-4 mx-2"
              }
            >
              {time}
            </span>
            ثانیه میباشد
          </p>
        ) : (
          <p
            className={
              "text-center text-green-600 border border-green-600 w-fit ms-auto py-0.5 px-4 rounded cursor-pointer mx-auto mt-6 hover:bg-green-600 hover:text-white duration-200"
            }
          >
            ارسال مجدد کد تایید
          </p>
        )}
      </span>
    </div>
  );
};

export default Timer;
