import React from "react";
import { ReportContainer, TableHead } from "./styles";
import { dateFormat, dateSort, nameFormat } from "../../utils";
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
                {this.props.permission === 3 && (
                  <TableHead permission={this.props.permission}>
                    Profissional
                  </TableHead>
                )}
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
                        {this.props.permission === 3 && (
                          <td>
                            {!elem.professional
                              ? elem.professional
                              : nameFormat(elem.professional)}
                          </td>
                        )}
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
                      {this.props.permission === 3 && (
                        <td>
                          <Skeleton variant="text" />
                        </td>
                      )}
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
