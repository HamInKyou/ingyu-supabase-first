const $main = document.querySelector('main')
const channel = client.channel('test-channel');

new QRCode(document.querySelector("#qrcode"), {
    text: location.origin,
    width: 128,
    height: 128
});

// on(구독할 기능, 설정객체, callback)
channel.on(
    'postgres_changes',
    {
        event : "INSERT",
        schema : "public",
        table: "test"
    },
    ({new : {content}}) => {
        $main.innerHTML = '';
        const $div = document.createElement('div');
        $div.textContent = content;
        $main.append($div);
    }

);
channel.subscribe();