import { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState([]);
  useEffect(() => {
    tableData();
  }, []);
  const tableData = () => {
    fetch("http://localhost:3000/sagar").then((result) => {
      result.json().then((res) => {
        setData(res);
      });
    });
  };

  const dataHandler = (id, e) => {
    const { checked } = e.target
    if (checked) {
      setCheck([...check, id]);
    //   console.log(check, "asdfsd")

    } else {
      setCheck(check.filter((e) => e !== id));
    }
  };
  const btn = () => {
    console.log(check);
  };

  return (
    <div>
      <table border="1" width="400">
        <tr>
          <td>ID</td>
          <td>NAME</td>
          <td>AGE</td>
          <td>Action</td>
        </tr>
        {data.map((list) => (
          <tr>
            <td>{list.id}</td>
            <td>{list.name}</td>
            <td>{list.age}</td>
            <td>
              <input
                type="checkbox"
                onChange={(e) => {
                  dataHandler(list.id, e);
                }}
              />
            </td>
          </tr>
        ))}
      </table>
      <button style={{ margin: 10, padding: 10 }} onClick={btn}>
        SUBMIT
      </button>
    </div>
  );
};
export default Table;
