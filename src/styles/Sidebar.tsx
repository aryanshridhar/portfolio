import CSS from 'csstype';

const sidebarStyle: CSS.Properties = {
    height: '100%',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    overflowX: 'hidden',
};

const sidebarContentStyle: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
};

export default { sidebarStyle, sidebarContentStyle };
