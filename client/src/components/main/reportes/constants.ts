import admin from '../../../assets/reportsMenu/admin.svg';
import till from '../../../assets/reportsMenu/till.svg';
import employee from '../../../assets/reportsMenu/employee.svg';
import indicator from '../../../assets/reportsMenu/indicator.svg';
import cash from '../../../assets/reportsMenu/cash.svg';
import clock from '../../../assets/reportsMenu/time.svg';
import stars from '../../../assets/reportsMenu/custom.svg';

type iconPath = string;
type reportValue = string;

interface Report {
  tittle: string;
  value: reportValue;
  icon: iconPath;
}

export const SET_ADMINISTRATION: reportValue = 'SET_ADMINISTRATION';
export const SET_TILL: reportValue = 'SET_TILL';
export const SET_EMPLOYEES: reportValue = 'SET_EMPLOYEES';
export const SET_KPI_INDICATORS: reportValue = 'SET_KPI_INDICATORS';
export const SET_SELLS: reportValue = 'SET_SELLS';
export const SET_CHANGES_HISTORY: reportValue = 'SET_CHANGES_HISTORY';
export const SET_CUSTOM_REPORTS: reportValue = 'SET_CUSTOM_REPORTS';

export const reports: Report[] = [
  { tittle: 'Administración', value: SET_ADMINISTRATION, icon: admin },
  { tittle: 'Caja', value: SET_TILL, icon: till },
  { tittle: 'Empleados', value: SET_EMPLOYEES, icon: employee },
  { tittle: 'Indicadores KPI', value: SET_KPI_INDICATORS, icon: indicator },
  { tittle: 'Ventas', value: SET_SELLS, icon: cash },
  { tittle: 'Historial de cambios', value: SET_CHANGES_HISTORY, icon: clock },
  { tittle: 'Personalizados', value: SET_CUSTOM_REPORTS, icon: stars },
];
