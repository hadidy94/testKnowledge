import Image from 'next/image';
import CountUp from 'react-countup';


export default function Search() {


    return (
        <section className="knhb-index-header">
            <div className="knhb-srch-box" >
                <form action="">
                    <input type="text" placeholder="البحث في البوابة" />
                    <button className="knbtn knbtn-main knbtn-lg" type="submit">بحث</button>
                </form>
            </div>

            <div className="knhb-main-facts-wp  d-flex align-items-start">
                <div className="knhb-main-facts-c d-flex align-items-center justify-content-between">

                    <div className="d-flex  align-items-center justify-content-between flex-column">
                        <h3 className="knhb-mb-0 knhb-fw500">
                            <span className="knhb-countto knhb-fw500">
                                <CountUp end={150} />
                            </span>K </h3>
                            <span>مادة معرفية</span>
                    </div>

                    <div className="d-flex  align-items-center justify-content-between flex-column">
                        <h3 className="knhb-mb-0  knhb-fw500">
                            <span className="knhb-countto knhb-fw500">
                                <CountUp end={85} />
                            </span>
                        </h3>
                        <span>تدوينة</span>
                    </div>

                    <div className="d-flex  align-items-center justify-content-between flex-column">
                        <h3 className="knhb-mb-0 knhb-fw500">
                            <span className="knhb-countto knhb-fw500">
                                <CountUp end={36} />
                            </span>
                        </h3>
                        <span>فكرة</span>
                    </div>

                    <div className="d-flex  align-items-center justify-content-between flex-column">
                        <h3 className="knhb-mb-0 knhb-fw200">
                            <span className="knhb-countto knhb-fw400">
                                <CountUp end={786} />
                            </span>
                        </h3>
                        <span>نموذج</span>
                    </div>
                </div>

                <div className="knhb-main-logo">

                    <Image src="/img/set.svg" alt="Vercel Logo" width={72} height={16} />
                </div>


                <div className="knhb-main-facts-c d-flex align-items-center justify-content-between">
                    <div className="d-flex  align-items-center justify-content-between flex-column">
                        <h3 className="knhb-mb-0 knhb-fw500">
                            <span className="knhb-countto knhb-fw500">
                                <CountUp end={150} />
                            </span>K </h3>
                        <span>جلسة معرفية</span>
                    </div>
                    <div className="d-flex  align-items-center justify-content-between flex-column">
                        <h3 className="knhb-mb-0  knhb-fw500">
                            <span className="knhb-countto knhb-fw500" >
                                <CountUp end={16} />
                            </span>
                        </h3>
                        <span>مجتمع </span>
                    </div>
                    <div className="d-flex  align-items-center justify-content-between flex-column">
                        <h3 className="knhb-mb-0 knhb-fw500">
                        <span className="knhb-countto knhb-fw500" >
                         <CountUp end={312} />
                         </span>
                         </h3>

                        <span>سوال</span>
                    </div>
                    <div className="d-flex  align-items-center justify-content-between flex-column">
                        <h3 className="knhb-mb-0 knhb-fw500">
                        <span className="knhb-countto knhb-fw500"> 
                        <CountUp end={986} />
                        </span>
                        </h3>

                        <span>جواب</span>
                    </div>
                </div>

            </div>
        </section>
    )

}