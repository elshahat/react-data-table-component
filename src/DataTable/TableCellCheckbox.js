import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DataTableContext } from './DataTableContext';
import { CellBase } from './Cell';
import Checkbox from './Checkbox';

const TableCellCheckboxStyle = styled(CellBase)`
  flex: 0 0 48px;
  font-size: ${props => props.theme.rows.fontSize};
  color: ${props => props.theme.rows.fontColor};
  min-height: ${props => props.theme.rows.height};
`;

const TableCellCheckbox = memo(({
  checked,
  row,
  onClick,
  checkboxStatusSelector,
}) => {
  const { keyField, selectableRowsComponent, selectableRowsComponentProps } = useContext(DataTableContext);

  return (
    <TableCellCheckboxStyle
      onClick={e => e.stopPropagation()}
      className="rdt_TableCell"
    >
      <Checkbox
        name={`select-row-${row[keyField]}`}
        component={selectableRowsComponent}
        componentOptions={selectableRowsComponentProps}
        checked={checked}
        onClick={onClick}
        data={row}
        checkboxStatusSelector={row[checkboxStatusSelector]}
      />
    </TableCellCheckboxStyle>
  );
});

TableCellCheckbox.propTypes = {
  row: PropTypes.object,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  checkboxStatusSelector: PropTypes.string,
};

TableCellCheckbox.defaultProps = {
  row: {},
  checked: false,
  onClick: null,
  checkboxStatusSelector: '',
};

export default TableCellCheckbox;
