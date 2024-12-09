//make array with unique numbers
function uniqueNums() {
  const uniqueIdx = new Set(); //makes object htat stores unique values

  while (uniqueIdx.size < 14) {
    const rand = Math.floor(Math.random() * 60) + 1;
    uniqueIdx.add(rand); //adds only unique nums until it reaches desired size 14,if 2 appears 2 times it wont get the 2nd 2
  }

  const uniqueIdxArray = Array.from(uniqueIdx); //convert the object to an array,const uniqueIdx = new Set(); made an object
  // console.log(uniqueIdxArray)

  const imgIdx = [...uniqueIdxArray, ...uniqueIdxArray]; //take the previous array twice,spread to duplicate
  // console.log(imgIdx)
  return imgIdx;
}

//Fisher–Yates shuffle
function shuffleUniqueNums() {
  const finalUniqueNums = uniqueNums();

  for (let i = finalUniqueNums.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [finalUniqueNums[i], finalUniqueNums[rand]] = [finalUniqueNums[rand], finalUniqueNums[i],];
  }

  return finalUniqueNums;
}

//generate image via img url
function makeImage() {
  const images = [];
  const randIdx = shuffleUniqueNums(); //randIdx [1,2,3,53,12,76...] array 28 values ,calls uniquenums function from above,which return imgIdx; and stores array into randidx

  for (let i = 0; i < randIdx.length; i++) {
    //populating new array named images,with an object { id: i + 1000, image: imgUrl }
    const urlIdx = randIdx[i];
    const imgUrl = `https://picsum.photos/id/${urlIdx}/200/300`;

    images.push({ id: urlIdx, image: imgUrl }); //pushing object with id and image into array / object1{id: xxxx, image: xxxx}
  }

  return images;
}

export { makeImage };


