
export default function ProgressBar() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <h6 className="m-0 small">المهارة توضع هنا</h6>
                <h4 className="m-0 text-light-gray">80%</h4>
            </div>

            <div className="progress">
                <div className="progress-bar gray-bg" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </>
    )
}