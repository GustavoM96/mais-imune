import React from "react";
import { ReportContainer, TableHead } from "./styles";
import { dateFormat, dateSort } from "../../utils";
import Skeleton from "@material-ui/lab/Skeleton";

export default class ReportTable extends React.Component {
  render() {
    return (
      <ReportContainer>
        <h3>Relatório de pacientes vacinados</h3>
        <div>
          <table>
            <thead>
              <tr>
                <TableHead permission={this.props.permission}>Data</TableHead>
                <TableHead permission={this.props.permission}>Nome</TableHead>
                <TableHead permission={this.props.permission}>CPF</TableHead>
                <TableHead permission={this.props.permission}>Vacina</TableHead>
              </tr>
            </thead>

            <tbody>
              {this.props.users[0]
                ? this.props.users
                    .sort((a, b) => {
                      return dateSort(a.date, b.date);
                    })
                    .map((elem, index) => (
                      <tr key={index}>
                        <td>{dateFormat(elem.date)}</td>
                        <td>{elem.user}</td>
                        <td>{elem.userCpf}</td>
                        <td>{elem.name}</td>
                      </tr>
                    ))
                : this.props.mockUsers.map((_, index) => (
                    <tr key={index}>
                      <td>
                        <Skeleton variant="text" />
                      </td>
                      <td>
                        <Skeleton variant="text" />
                      </td>
                      <td>
                        <Skeleton variant="text" />
                      </td>
                      <td>
                        <Skeleton variant="text" />
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </ReportContainer>
    );
  }
}
