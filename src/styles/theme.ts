/* eslint-disable @typescript-eslint/no-explicit-any */
type Theme = {
  breakpoints: string[];
  sizes: string[];
  space: string[];
  colors: {
    dark: {
      white: string[] | any;
      black: string[] | any;
      primary: string[] | any;
      secondary: string[] | any;
      teritary: string[] | any;
      success: string[] | any;
      error: string[] | any;
      warning: string[] | any;
      gradient: string[] | any;
    };
    light: {
      white: string[] | any;
      black: string[] | any;
      primary: string[] | any;
      secondary: string[] | any;
      teritary: string[] | any;
      success: string[] | any;
      error: string[] | any;
      warning: string[] | any;
      gradient: string[] | any;
    };
  };
  fontSizes: string[];
  fontWeights: number[];
  lineHeights: string[];
  letterSpacings: object;
  borders: Array<string | number>;
  radii: string[];
  zIndices: number[];
  shadows: string[];
};
export const theme: Theme = {
  // Media Queries
  breakpoints: ['640px', '768px', '1024px', '1280px'],

  // Layout (height, width, maxHeight, minHeight, minWidth, maxWidth, size, display, verticalAlign, overflow, overflowX, overflowY )
  sizes: [
    '5px', //0
    '10px', //1
    '15px', //2
    '20px', //3
    '25px', //4
    '30px', //5
    '35px', //6
    '40px', //7
    '45px', //8
    '50px', //9
    '55px', //10
    '60px', //11
    '65px', //12
    '70px', //13
    '75px', //14
    '80px', //15
    '85px', //16
    '90px', //17
    '95px', //18
    '100px', //19
    '105px', //20
    '110px', //21
    '115px', //22
    '120px', //23
    '125px', //24
    '130px', //25
    '135px', //26
    '140px', //27
    '145px', //28
    '150px', //29
    '155px', //30
    '160px', //31
    '165px', //32
    '170px', //33
    '175px', //34
    '180px', //35
    '185px', //36
    '190px', //37
    '195px', //38
    '200px', //39
    '205px', //40
    '210px', //41
    '215px', //42
    '220px', //43
    '225px', //44
    '230px', //45
    '235px', //46
    '240px', //47
  ],

  // Space (top, right, bottom, left, margin, padding, mt, mr, mb, ml, mx, my, pt, pr, pb, pl, px, py)
  space: [
    '5px', //0
    '10px', //1
    '15px', //2
    '20px', //3
    '25px', //4
    '30px', //5
    '35px', //6
    '40px', //7
    '45px', //8
    '50px', //9
    '55px', //10
    '60px', //11
    '65px', //12
    '70px', //13
    '75px', //14
    '80px', //15
    '85px', //16
    '90px', //17
    '95px', //18
    '100px', //19
    '105px', //20
    '110px', //21
    '115px', //22
    '120px', //23
    '125px', //24
    '130px', //25
    '135px', //26
    '140px', //27
    '145px', //28
    '150px', //29
    '155px', //30
    '160px', //31
    '165px', //32
    '170px', //33
    '175px', //34
    '180px', //35
    '185px', //36
    '190px', //37
    '195px', //38
    '200px', //39
    '205px', //40
    '210px', //41
    '215px', //42
    '220px', //43
    '225px', //44
    '230px', //45
    '235px', //46
    '240px', //47
  ],

  // Colors (Order from dark to light)
  colors: {
    dark: {
      black: [
        '#0A0A0A',
        '#FFFFFF',
        '#E4E6E8',
        '#030229',
        '#F3F5F7',
        '#c4c4c4',
        '#282E34',
        '#656A71', //5
        '#9DA7BC',
        '#DBDDDF', //7
        '#F6F6F9',
        '#566176', //9
        '#C7C7C7',
        '#374659',
        '#444444',
        '#101010',
      ],
      white: [
        '#FFF',
        '#5C5C5C',
        '#E5E5E5',
        '#9DA7BC',
        '#485C75',
        '#F0F0F8',
        '#F7F7F8', //5
        '#F0F8F7',
        '#93979E', //7
        '#F0F0F8',
        '#F3F5FD', //9
        '#FDFDFD',
        '#ECEEF3', //11
        '#F5F5F7',
      ],
      primary: [
        '#0F0F0F',
        '#111111',
        '#1F1F1F',
        '#06142F',
        '#999B9D',
        '#D7D7DB',
        '#DCDDE3',
        '#B6BABD',
        '#232323',
        '#5C5C5C',
        '#898989',
        '#B3B3B7',
      ],
      secondary: [
        '#1F1F1F',
        '#6940C9',
        '#065AD8',
        '#2B67C4',
        '#A1B1D0',
        '#0958D8',
      ],
      teritary: [''],
      error: ['#F6574C'],
      warning: ['#F5A732'],
      success: ['#19C47C'],
      gradient: [''],
    },
    light: {
      black: [
        '#F3F5F7',
        '#000000',
        '#2C2E2F',
        '#030229',
        '#230B34',
        '#242627',
        '#282E34',
        '#9DA7BC', //5
        '#9DA7BC',
        '#485C75', //7
        '#F6F6F9',
        '#566176', //9
        '#C7C7C7',
        '#374659',
        '#444444',
        '#f5f5f5',
        //12
      ],
      white: [
        '#FFF',
        '#E1E1E1',
        '#E5E5E5',
        '#9DA7BC',
        '#485C75',
        '#F0F0F8',
        '#F7F7F8', //5
        '#F0F8F7',
        '#DCDDE0', //7
        '#F0F0F8',
        '#F3F5FD', //9
        '#FDFDFD',
        '#ECEEF3', //11
        '#F5F5F7',
      ],
      primary: [
        '#0F0F0F',
        '#111111',
        '#1F1F1F',
        '#06142F',
        '#999B9D',
        '#D7D7DB',
        '#DCDDE3',
        '#B6BABD',
        '#232323',
        '#5C5C5C',
        '#898989',
        '#B3B3B7',
      ],
      secondary: [
        '#1F1F1F',
        '#6940C9',
        '#065AD8',
        '#2B67C4',
        '#A1B1D0',
        '#0958D8',
      ],
      teritary: [''],
      error: ['#F6574C'],
      warning: ['#F5A732'],
      success: ['#19C47C'],
      gradient: [''],
    },
  },

  fontSizes: [
    '11px', //0
    '12px', //1
    '13px', //2
    '14px', //3
    '15px', //4
    '16px', //5
    '20px', //6
    '24px', //7
    '32px', //8
    '36px', //9
    '40px', //10
    '48px', //11
    '64px', //12
    '70px', //13
    '80px', //14
    '96px', //15
  ],

  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: [
    '11px', //0
    '12px', //1
    '13px', //2
    '14px', //3
    '15px', //4
    '16px', //5
    '20px', //6
    '24px', //7
    '32px', //8
    '36px', //9
    '40px', //10
    '48px', //11
    '64px', //12
    '70px', //13
    '80px', //14
    '96px', //15
  ],

  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },

  // Borders
  borders: ['1px solid', '2px solid', '4px solid'],

  // Border Radius
  radii: [
    '5px', //0
    '10px', //1
    '15px', //2
    '20px', //3
    '25px', //4
    '30px', //5
    '40px', //6
    '50px', //7
    '60px', //8
    '70px', //9
    '75px', //10
  ],

  // z-index
  zIndices: [1, 2, 3, -1, 99, 150, 250],

  // Shadow
  shadows: ['0px 5px 20px rgba(0, 0, 0, 0.05)'],
};
