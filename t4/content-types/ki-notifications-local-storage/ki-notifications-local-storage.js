// Base to play around with. Use content-id for the value

// see https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage

// and

// https://stackoverflow.com/questions/9943220/how-to-delete-a-localstorage-item-when-the-browser-window-tab-is-closed

localStorage.setItem("foo", '12313123213');

localStorage.getItem("foo");

localStorage.removeItem('foo');



var test = localStorage.getItem("foo");

if (test !== null) { alert('found')};

