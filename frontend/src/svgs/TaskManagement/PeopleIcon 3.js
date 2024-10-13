import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="55"
      height="55"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path fill="#E3E3E3" d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"></path>
      <path
        fill="url(#pattern0_428_1700)"
        fillOpacity="0.2"
        d="M13 6a3 3 0 11-6 0 3 3 0 016 0z"
      ></path>
      <path fill="#E3E3E3" d="M18 8a2 2 0 11-4 0 2 2 0 014 0z"></path>
      <path
        fill="url(#pattern1_428_1700)"
        fillOpacity="0.2"
        d="M18 8a2 2 0 11-4 0 2 2 0 014 0z"
      ></path>
      <path fill="#E3E3E3" d="M14 15a4 4 0 00-8 0v3h8v-3z"></path>
      <path
        fill="url(#pattern2_428_1700)"
        fillOpacity="0.2"
        d="M14 15a4 4 0 00-8 0v3h8v-3z"
      ></path>
      <path fill="#E3E3E3" d="M6 8a2 2 0 11-4 0 2 2 0 014 0z"></path>
      <path
        fill="url(#pattern3_428_1700)"
        fillOpacity="0.2"
        d="M6 8a2 2 0 11-4 0 2 2 0 014 0z"
      ></path>
      <path
        fill="#E3E3E3"
        d="M16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3z"
      ></path>
      <path
        fill="url(#pattern4_428_1700)"
        fillOpacity="0.2"
        d="M16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3z"
      ></path>
      <path
        fill="#E3E3E3"
        d="M4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
      ></path>
      <path
        fill="url(#pattern5_428_1700)"
        fillOpacity="0.2"
        d="M4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
      ></path>
      <defs>
        <pattern
          id="pattern0_428_1700"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.0052 0 0 .00625 .083 0)"
            xlinkHref="#image0_428_1700"
          ></use>
        </pattern>
        <pattern
          id="pattern1_428_1700"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.0052 0 0 .00625 .083 0)"
            xlinkHref="#image0_428_1700"
          ></use>
        </pattern>
        <pattern
          id="pattern2_428_1700"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.0052 0 0 .00625 .083 0)"
            xlinkHref="#image0_428_1700"
          ></use>
        </pattern>
        <pattern
          id="pattern3_428_1700"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.0052 0 0 .00625 .083 0)"
            xlinkHref="#image0_428_1700"
          ></use>
        </pattern>
        <pattern
          id="pattern4_428_1700"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.0052 0 0 .00625 .083 0)"
            xlinkHref="#image0_428_1700"
          ></use>
        </pattern>
        <pattern
          id="pattern5_428_1700"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.0052 0 0 .00625 .083 0)"
            xlinkHref="#image0_428_1700"
          ></use>
        </pattern>
        <image
          id="image0_428_1700"
          width="160"
          height="160"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfWSURBVHgB7d3tdRM5FMbxm5cCsh0MFZCEl6+YCshWgFMBUEGSCoAKMBUsVBDzFcNJUgFTQiqAvZdIgc0GS/ZoRtLk/ztnThw8ccj4sTTSaCQRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoBQbUoGzs7PJ9+/fd/XhE93s647b8JuNjY1z/XL548ePj5ubm/O9vb1zKVzRAfz69etUD+pzPaATwTpa3U4ePHgwk0IVGUBX4r3Th40ghVaP5+GjR4/mUphNKYyG77UerFMhfCk1WiWf6rE9ksIUVQJqlWul3lTQp5lWyYdSiGICSPgGVUwIi6iCXdUwFQxlaqc6UoDsJaBrcJwKBqfH/Wnuhsm2ZOZau7Eudfug24V7jF92tLtqV7utrK+0ifkBbZjYsb8nGWUtAa2fT7/EBPBSg/p2e3v7jXauEryAxWLxUsNlpzUxnfWHOfsJcwfwm4Q/ra0ezKcavFYQTU9tmpjuLC0x5/v7+08lk2wB/Pz58+7W1tZZYLdLDd8e4VuPC6Ed46UlYc5zwWytYA3fJLSPHpgTwrc+d+zehvbTD/muZJKzG+ZJ4PlWP5VvBJ1ouOwYLj1vznmtPVsA9Y9uArvMBZ1Zo81GxyzbR88D70sm2QKof3So2L8QJOGGaS2TbWhb9n7AJUbb3aKNA3vDG9v0PHdHq0n7W20776mbKfSaBHDsNHRW4j/T6vDADa69pt9fP9auqVa/zDWU7zWMcxk5Atgzu9SooTvSkE0if6TRbar7T10Yix5Q2lVx4wHHwqpZP7axQyuz0e2dddhbn56MEAHsge8A1u2lpPHz9dRzGRkCmFjsJbA17Ojrzkoc1dwFAUyox/Bd09c/HlNJSAAT0nO9f2SAe1k0hG/Gck5IABOxqtHG48kwbOzfKuMoi0UAE3BV7yoNjpmNQNG+vr+0i2XDNvveBl/I1b28QdayduMpq0Y/YAIanKjBn3ZJTLe/bxvh44ZD2Xa8WCyO3YDSENtnJhWjBExjErHPh/39/aixjRrGY1cahjQa1olUjAB2ZFc6JG5U90q3QVoItZqNGctXdYuYAHakJdVBxD6H6wwy2NraOpbwQIKJVIwAdhQxlq5dd7i7C22oFGzc6JoqEcCOIgbWfpQOtPScR+zWSKUIYHdN4PlOc/Rtb2/H/HwjlSKAhYs5d7RBrVIpAthdr6ONY87vNICtVIoAdhcKYNcbfoKX97Sarvb2BQLYXegc7aBLK1VLt5h+vlYqRQC7+xR4fmfdgaluxMt02T52ea/m+XIIYEcarphW6ot1hk+54V2hfUIfgKIRwI6sk9km+AnsZqXgaWwIrcq2GWNjhne5mQ+qRQAT0KC8j9jt530dGqyl1bGbsNMmFJpKgAW/9rlz7txwLNcg8IvdnKd4A+22SQ2WDY1qArva73yt+76Qq6FX1xNtakl230q8FW7ftAAWM9n4uu5UAF3pYudV161SDcNM3/xXXU/kbcCBLYUQuXsjN0q4329Oj2EjZcYwc9idqYLtRh53w9DNLpGpvpmnXS/o27lgzPCpRFo3UqZ6dyKALnyzPz1vVV+KED58+PBl5PlgF37G2FHMnTP6AIbC5yUM4bTHEI5uuuJRBzA2fF7KEEYOqY9mLd4xzpU92gCuGj4vVQjdfR02+Xcr3dgKAa9sIvExTlc8ygCuGz4vYQjn2kVj63BYd0krq7HgnWipd2/MUxWPrhuma/g8dxXCQtj5hN9NrzZzKwNM9PETrVKbG1c6Wv23Vv/tQv//H2wgqv7cKBoay4wqgKnC56UMoXn8+LFdN7ZttCXaqkZTBa8RvqhApaqOcbtRBHDV8Llzqz2JnwaDEPak+gCuEz5roVqL0ro1hBBmVXUA1w2f/54Q5ldtALuGzyOEeVUZwFTh8whhPtUFMHX4PEKYR1UB7Ct8HiEcXjUB7Dt8HiEcVhUBHCp8HiEcTvEBHDp8HiEcRtEBzBU+jxD2r+QAPssZPo8Q9qvkAB7E7thX+DxC2J/qrwX3HT6PEPaj6gAOFT6PEKZXbQCHDp9HCNOqMoC5wucRwnSqC2Du8HmEMI2qAlhK+DxC2F01ASwtfB4h7KaKAJYaPo8Qrq/4AJYePo8QrqfoANYSPo8Qrq7YANrcxzWFzyOEqyk2gFr6XUilCGE8JinvCSGMQwB7RAjDCGDPCOFyBHAAhPDPCOBACOHtCOCACOH/EcCBEcL/yhnA0ASRo/3UZwhhscey5AB2XWm8aAOHcOmxtDWHJZOcAex1pfEaDBjCSeD5UGHQm5wBDC20vPZK4zXpO4S6n63M2QRe86Nkki2Afa40Xpu+QmjHTo/zsQTo755LJtkC2MdK4zVLHUIXvttWB72p1d99J88Bk640PgYpQmiPdTtyq643ES9zIhltSGYarG8Sd6BMKzdWGh+pRrej2J2tFes+zNbatSlNYhsprVtKLJvsKyV1XWkc1ys67cqK7NhLZtmvhAy80jgcd7vDXDLLXgV7X758mWlV8lzQO6uubU1jKUAxATSEsH8lhc8UNRihj5XG8Yud6pQUPlNUCegtFouJNkzeSXzrGMu11uAo4ZzvpiID6GkXzVSuuiMawcqso9+qXLdgdpGKDqAXWGkcVy7dZlc1PtmlzhJLPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKBc/wKIg/OjU7+ZfgAAAABJRU5ErkJggg=="
        ></image>
      </defs>
    </svg>
  );
}

export default Icon;