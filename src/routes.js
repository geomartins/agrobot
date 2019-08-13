import Dashboard from './views/admin/Dashboard.vue';
import Login from './views/admin/Login.vue';
import UsersAdd from './views/admin/UsersAdd.vue';
import UsersList from './views/admin/UsersList.vue';
import AdminList from './views/admin/AdminList.vue';
import PortfolioList from './views/admin/PortfolioList.vue';
import UsersListEdit from './views/admin/UsersListEdit.vue';
import UserPorfolio from './views/admin/UserPorfolio.vue';
import UserPortfolioEdit from './views/admin/UserPortfolioEdit'
import ProjectAccount from './views/admin/ProjectAccount.vue';
import TransactionHistoryByPortfolio from './views/admin/TransactionHistoryByPortfolio.vue';
import TransactionHistory from './views/admin/TransactionHistory.vue';

var token = localStorage.getItem("token");
//store.state.token;
//  localStorage.getItem("token")

export const routes = [
    { path: '/', name: 'Home', component: Login,  beforeEnter: (to, from, next) => {
       
       //returns back if the token is true and the user is trying to see the login page after login
       if(token){ next('/admin/dashboard') ; }
       next();
    }},
    { path: '/admin/dashboard', name: 'AdminDashboard', component: Dashboard },
    { path: '/users/add', name: 'UsersAdd', component: UsersAdd },
    { path: '/users/list', name: 'UsersList', component: UsersList },
    { path: '/admin/list', name: 'AdminList', component: AdminList },
    { path: '/portfolio/list', name: 'PortfolioList', component: PortfolioList },
    { path: '/transaction_history/portfolio/:user_portfolio_id/:user_id/:username', name: 'TransactionHistoryByPortfolio', component: TransactionHistoryByPortfolio },
    { path: '/transaction_history', component: TransactionHistory, name: 'TransactionHistory'},
    { path: '/user/portfolio/:id/:name', name: 'UserPorfolio', component: UserPorfolio },
    { path: '/user_portfolio_edit/:id/:user_id', name: 'UserPortfolioEdit', component: UserPortfolioEdit },
    { path: '/users/list/edit/:id', name: 'UsersListEdit', component: UsersListEdit },
    { path: '/project_account', name: 'ProjectAccount', component: ProjectAccount },
    { path: '*', redirect: '/'},


]