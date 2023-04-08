import DashboardLayout from '../../components/Layout/DashboardLayout';

export default function dashboard() {
    return <h1> hello dashboard </h1>
}

dashboard.getLayout = function (page) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    );
};