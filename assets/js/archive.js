const main = async (client) => {
    const $ul = document.querySelector('#list-archive');

    const archiveData = await fetchArchive(client);
    renderArchive($ul, archiveData);
}

const fetchArchive = async (client) => {
    const {data} = await client.from("test").select("*").order("created_at", { ascending: false });
    return data;
}

const renderArchive = ($ul, archiveData) => {
    archiveData.forEach((item) => {
        const $li = document.createElement("li");
        $li.textContent = item.content;
        $ul.append($li);
    })
}

/** main */
main(client)