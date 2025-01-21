function ListItem(item) {
  return (
    <>
      <div className="block ms-4">
        <div className="partOfSpeech fst-italic fw-bold">
          {item.item.partOfSpeech}
        </div>
        <div className="definitions ms-4 my-2">
          {item.item.definitions.map((defi) => (
            <div className="part my-1">
              <div className="definition">• {defi.definition}</div>
              {"example" in defi && (
                <div className="example ms-4">example:{defi.example}</div>
              )}
            </div>
          ))}
          {item.item.synonyms.length != 0 && (
            <div className="synonyms">
              synonyms:
              {item.item.synonyms.map((word) => (
                <span className="synonym">{word}</span>
              ))}
            </div>
          )}
          {item.item.antonyms.length != 0 && (
            <div className="antonyms">
              antonyms:
              {item.item.antonyms.map((word) => (
                <span className="antonym">{word}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default ListItem;
