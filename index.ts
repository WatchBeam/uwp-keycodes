export const enum keys {
    Backspace = 8,
    Tab = 9,
    Enter = 13,
    Shift = 16,
    Ctrl = 17,
    Alt = 18,
    Pause = 19,
    CapsLock = 20,
    Escape = 27,
    Space = 32,
    PageUp = 33,
    PageDown = 34,
    End = 35,
    Home = 36,
    LeftArrow = 37,
    UpArrow = 38,
    RightArrow = 39,
    DownArrow = 40,
    Insert = 45,
    Delete = 46,

    Digit0 = 48,
    Digit1 = 49,
    Digit2 = 50,
    Digit3 = 51,
    Digit4 = 52,
    Digit5 = 53,
    Digit6 = 54,
    Digit7 = 55,
    Digit8 = 56,
    Digit9 = 57,

    a = 65,
    b = 66,
    c = 67,
    d = 68,
    e = 69,
    f = 70,
    g = 71,
    h = 72,
    i = 73,
    j = 74,
    k = 75,
    l = 76,
    m = 77,
    n = 78,
    o = 79,
    p = 80,
    q = 81,
    r = 82,
    s = 83,
    t = 84,
    u = 85,
    v = 86,
    w = 87,
    x = 88,
    y = 89,
    z = 90,

    LeftWindowLey = 91,
    RightWindowKey = 92,
    SelectKey = 93,

    Numpad0 = 96,
    Numpad1 = 97,
    Numpad2 = 98,
    Numpad3 = 99,
    Numpad4 = 100,
    Numpad5 = 101,
    Numpad6 = 102,
    Numpad7 = 103,
    Numpad8 = 104,
    Numpad9 = 105,
    Multiply = 106,
    Add = 107,
    Subtract = 109,
    DecimalPoint = 110,
    Divide = 111,

    F1 = 112,
    F2 = 113,
    F3 = 114,
    F4 = 115,
    F5 = 116,
    F6 = 117,
    F7 = 118,
    F8 = 119,
    F9 = 120,
    F10 = 121,
    F11 = 122,
    F12 = 123,

    NavigationLeft = 140,
    NavigationRight = 141,
    NavigationAccept = 142,
    NavigationUp = 138,
    NavigationDown = 139,

    NumLock = 144,
    ScrollLock = 145,
    SemiColon = 186,
    EqualSign = 187,
    Comma = 188,
    Dash = 189,
    Period = 190,
    ForwardSlash = 191,
    GraveAccent = 192,
    OpenBracket = 219,
    BackSlash = 220,
    CloseBraket = 221,
    SingleQuote = 222,

    GamepadA = 195,
    GamepadB = 196,
    GamepadX = 197,
    GamepadY = 198,
    GamepadRightShoulder = 199,
    GamepadLeftShoulder = 200,
    GamepadLeftTrigger = 201,
    GamepadRightTrigger = 202,
    GamepadDPadUp = 203,
    GamepadDPadDown = 204,
    GamepadDPadLeft = 205,
    GamepadDPadRight = 206,
    GamepadMenu = 207,
    GamepadView = 208,
    GamepadLeftThumbstick = 209,
    GamepadRightThumbstick = 210,
    GamepadLeftThumbstickUp = 211,
    GamepadLeftThumbstickDown = 212,
    GamepadLeftThumbstickRight = 213,
    GamepadLeftThumbstickLeft = 214,
    GamepadRightThumbstickUp = 215,
    GamepadRightThumbstickDown = 216,
    GamepadRightThumbstickRight = 217,
    GamepadRightThumbstickLeft = 218,
}


export const enum CommonKeys {
    Left,
    Right,
    Up,
    Down,
    Submit,
    Back,
    X,
    Y,
    TabLeft,
    TabRight,
    TabUp,
    TabDown,
    View,
    Menu,
};

export const commonKeyMap: number[] = [];
commonKeyMap[keys.LeftArrow] = CommonKeys.Left;
commonKeyMap[keys.GamepadLeftThumbstickLeft] = CommonKeys.Left;
commonKeyMap[keys.GamepadDPadLeft] = CommonKeys.Left;
commonKeyMap[keys.NavigationLeft] = CommonKeys.Left;

commonKeyMap[keys.RightArrow] = CommonKeys.Right;
commonKeyMap[keys.GamepadLeftThumbstickRight] = CommonKeys.Right;
commonKeyMap[keys.GamepadDPadRight] = CommonKeys.Right;
commonKeyMap[keys.NavigationRight] = CommonKeys.Right;

commonKeyMap[keys.UpArrow] = CommonKeys.Up;
commonKeyMap[keys.GamepadLeftThumbstickUp] = CommonKeys.Up;
commonKeyMap[keys.GamepadDPadUp] = CommonKeys.Up;
commonKeyMap[keys.NavigationUp] = CommonKeys.Up;

commonKeyMap[keys.DownArrow] = CommonKeys.Down;
commonKeyMap[keys.GamepadLeftThumbstickDown] = CommonKeys.Down;
commonKeyMap[keys.GamepadDPadDown] = CommonKeys.Down;
commonKeyMap[keys.NavigationDown] = CommonKeys.Down;

commonKeyMap[keys.Enter] = CommonKeys.Submit;
commonKeyMap[keys.NavigationAccept] = CommonKeys.Submit;
commonKeyMap[keys.GamepadA] = CommonKeys.Submit;

commonKeyMap[keys.Escape] = CommonKeys.Back;
commonKeyMap[keys.GamepadB] = CommonKeys.Back;

commonKeyMap[keys.Numpad7] = CommonKeys.X;
commonKeyMap[keys.GamepadX] = CommonKeys.X;
commonKeyMap[keys.Numpad9] = CommonKeys.Y;
commonKeyMap[keys.GamepadY] = CommonKeys.Y;

commonKeyMap[keys.Numpad4] = CommonKeys.TabLeft;
commonKeyMap[keys.GamepadLeftShoulder] = CommonKeys.TabLeft;
commonKeyMap[keys.Numpad6] = CommonKeys.TabRight;
commonKeyMap[keys.GamepadRightShoulder] = CommonKeys.TabRight;
commonKeyMap[keys.Numpad8] = CommonKeys.TabUp;
commonKeyMap[keys.GamepadLeftTrigger] = CommonKeys.TabUp;
commonKeyMap[keys.Numpad2] = CommonKeys.TabDown;
commonKeyMap[keys.GamepadRightTrigger] = CommonKeys.TabDown;

commonKeyMap[keys.Divide] = CommonKeys.View;
commonKeyMap[keys.GamepadView] = CommonKeys.View;
commonKeyMap[keys.Multiply] = CommonKeys.Menu;
commonKeyMap[keys.GamepadMenu] = CommonKeys.Menu;
