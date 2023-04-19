//svg
import dataResearch from './components/assets/data-research-icon.svg';
import geographyIcon from './components/assets/geography-icon.svg';
import programsIcon from './components/assets/programs-icon.svg';
import legislativeIcon from './components/assets/legislative-icon.svg';
export const menus = ['About us', 'Events', 'Boards & Committess'];
export const togelMenus = ['Home', 'News & Events', 'About us', 'Contact Us', 'Boards & Committess'];
export const togelSubMenus = [
  {
    name: 'Data & Research',
    menus: [
      'Economy',
      'State Finances',
      'Education',
      'Healthcare',
      'Local Government',
      'Population and Demographics',
      'State Register Calculations',
      'Presentations',
    ],
  },
  {
    name: 'Geography & Mapping',
    menus: [
      'Transportation Carrier Network (Uber)',
      'SC Real Time Network',
      'SC State GIS',
      'Maps',
      'Interactive Mapping',
      'Statewide Aerial Imagery',
    ],
  },
  {
    name: 'Programs & Services',
    menus: [
      'Precinct Demographics and Redistricting',
      'State 911 Program',
      'Data Services and Online Solutions',
      'Geodetic Survey',
      'Fiscal Analysis',
      '2020 Census',
    ],
  },
  {
    name: 'Legislative fiscal impacts',
    menus: ['Current General Assembly Session Previous General Assembly Session Forms'],
  },
];
export const cards = [
  { name: 'Data & Research', image: dataResearch },
  { name: 'Geography & Mapping', image: geographyIcon },
  { name: 'Programs & Services', image: programsIcon },
  { name: 'Legislative Fiscal Impacts', image: legislativeIcon },
];
export const services = [
  'Overview and History of the South Carolina State Budget',
  'Employer Contribution Trends',
  'Appropriation Bills and Acts',
  'Overview and History of the South Carolina State Budget',
  'Employer Contribution Trends-June4, 2019',
  'Overview and History of the South Carolina State Budget',
  'Employer Contribution Trends-June 4, 2019',
  'Executive Budget Office State Agency Budget Plans(Requests)',
];
export const recentUpdates = [
  {
    link: 'Local Government Finance',
    description: 'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut loareet sodales',
    published_at: 'Jan 2, 2020',
    button: 'Updated',
  },
  { link: 'Transportation Network Carrier Maps', description: '', published_at: 'Jan 2, 2020', button: 'New' },
  {
    link: 'BEA Long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23',
    description: 'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut loareet sodales',
    published_at: 'Dec 16, 2019',
    button: 'Updated',
  },
  { link: 'Budget Development', description: '', published_at: 'Dec 16, 2019', button: 'New' },
  { link: 'November 2019 General Fund Revenue Digest', description: '', published_at: 'Dec 13, 2019', button: 'New' },
];
export const events = [
  {
    date: { month: 'Nov', day: '22' },
    btn: 'Updated',
    heading: 'Board of Economic Advisors Meeting',
    location: 'Room 417, Bowers Conference Room, Rembert Dennis Building',
    time: '1:30 pm',
    phone: '(803) 734-2265',
  },
  {
    date: { month: 'Nov', day: '23' },
    btn: 'Cancelled',
    heading: 'Board of Economic Advisors Meeting',
    location: 'Room 417, Bowers Conference Room, Rembert Dennis Building',
    time: '1:30 pm',
    phone: '(803) 734-2265',
  },
  {
    date: { month: 'Nov', day: '25' },
    btn: '',
    heading: 'Board of Economic Advisors Meeting',
    location: 'Room 417, Bowers Conference Room, Rembert Dennis Building',
    time: '1:30 pm',
    phone: '(803) 734-2265',
  },
  {
    date: { month: 'Nov', day: '28' },
    btn: '',
    heading: 'Board of Economic Advisors Meeting',
    location: 'Room 417, Bowers Conference Room, Rembert Dennis Building',
    time: '1:30 pm',
    phone: '(803) 734-2265',
  },
];
