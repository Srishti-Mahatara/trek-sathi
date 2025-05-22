import PokharaImage from "../../../assets/images/pokhara.jpg";
import {IconMapPin} from "@tabler/icons-react";

export const LocationDetailDescription = () => {
    return <section className="bg-white rounded-lg shadow-md overflow-hidden mb-xl">
        <div className="grid md:grid-cols-2 gap-lg p-lg">
            <div>
                <div className="flex items-center gap-xs mb-xs">
                    <IconMapPin className="text-primary" size={16} />
                    <span className="text-gray-600">3 km away</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-md">About Phewa Lake</h2>
                <div className="space-y-md text-gray-700 leading-relaxed">
                    <p>
                        Phewa Lake is the centerpiece of Pokhara's natural beauty.
                        Surrounded by forest-covered hills and with the magnificent
                        Annapurna range reflecting on its surface on clear days, the lake
                        offers one of Nepal's most iconic views. The lake covers an area
                        of about 4.43 square kilometers and has an average depth of about
                        8.6 meters.
                    </p>
                    <p>
                        Visitors can enjoy boating, kayaking, and paddleboarding on the
                        lake. The eastern shore of the lake, known as Lakeside or Baidam,
                        is the tourist hub of Pokhara with numerous hotels, restaurants,
                        and shops. The western shore is less developed and offers more
                        tranquil surroundings with forest trails and small villages.
                    </p>
                    <p>
                        The lake also features the famous Tal Barahi Temple, a two-story
                        pagoda temple located on a small island about 500 meters from the
                        Lakeside. The temple is dedicated to the Hindu goddess Durga and
                        is an important religious site for locals and visitors alike.
                    </p>
                </div>
            </div>
            <div>
                <img
                    src={PokharaImage}
                    alt="Another view of Phewa Lake"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
        </div>
    </section>

}
