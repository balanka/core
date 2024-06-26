export const elementSize = ({ options = {} }) =>
  options.padding === 'normal' ? 'medium' : 'small';

export const baseIconSize = (props) =>
  elementSize(props) === 'medium' ? 48 : 32;

export const rowActions = (props) =>
  props.actions
    ? props.actions.filter(
        (a) => a.position === 'row' || typeof a === 'function'
      )
    : [];
export const actionsColumnWidth = (props) =>
  rowActions(props).length * baseIconSize(props);
export const selectionMaxWidth = (props, maxTreeLevel) =>
  baseIconSize(props) + 9 * maxTreeLevel;

export const reducePercentsInCalc = (calc, fullValue) => {
  if (!calc) return `${fullValue}px`;
  const captureGroups = calc.match(/(\d*)%/);
  if (captureGroups && captureGroups.length > 1) {
    const percentage = captureGroups[1];
    return calc.replace(/\d*%/, `${fullValue * (percentage / 100)}px`);
  }
  return calc.replace(/\d*%/, `${fullValue}px`);
};

export const widthToNumber = (width) => {
  if (typeof width === 'number') return width;
  if (!width || !width.match(/^\s*\d+(px)?\s*$/)) return NaN;
  return Number(width.replace(/px$/, ''));
};

export const parseFirstLastPageButtons = (showFirstLastPageButtons, isRTL) => {
  let result = { first: true, last: true };
  if (typeof showFirstLastPageButtons === 'boolean') {
    result = {
      first: showFirstLastPageButtons,
      last: showFirstLastPageButtons
    };
  } else if (typeof showFirstLastPageButtons === 'object') {
    result = { ...result, ...showFirstLastPageButtons };
  }
  if (isRTL) {
    result = { first: result.last, last: result.first };
  }
  return result;
};
