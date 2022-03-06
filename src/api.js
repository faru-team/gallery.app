export async function fetchImages(breed) {
  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random/12`
    // fetch関数を使って、DogAPIから犬の画像URLリストを取得する
  );
  const data = await response.json();
  return data.message;
}