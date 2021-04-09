import FormVacinaUser from "./components/form-vacina-user";

function App() {
  let userInfo = {
    id: 1,
    email: "luciano@feder.com",
    password: "$2a$10$aPVNAv8OkKJi6FKlSZ3k8.FG5J1Yvyf5tedJq7oFWEDKu92ou9BmS",
    user: "lucianofeder",
    cpf: "04722222959",
    permission: 3,
    vaccines: [5, 4, 2],
  };
  return (
    <div>
      <FormVacinaUser userInfo={userInfo}></FormVacinaUser>
    </div>
  );
}

export default App;
