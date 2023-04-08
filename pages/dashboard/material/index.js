import DashboardLayout from '../../../components/Layout/DashboardLayout';

const DashboardMaterial = () => {
    return (
        <h1>material</h1>
    )

}

DashboardMaterial.getLayout = function (page) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    );
};
export default DashboardMaterial;

