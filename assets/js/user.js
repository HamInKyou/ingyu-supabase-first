const $textarea = document.querySelector('textarea');
const $button = document.querySelector('button');

$button.addEventListener('click', async () => {
    const content = $textarea.value;
    if(!content) return;

    await client.from("test").insert({
        content: content,
    });

    $textarea.value = "";
    alert("제출 완료!")
})