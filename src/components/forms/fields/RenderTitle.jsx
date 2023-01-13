const RenderTitle = ({index, label, num}) => {
  return(<h3 className={`${index === 1 ? 'first-topic' : ''}`}><i className="num-offset">{num}</i>{label}</h3>)
};

export default RenderTitle;