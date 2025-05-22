import PokharaImage from "../../../assets/images/pokhara.jpg";
import {Rating} from "@mantine/core";
import React from "react";
import {IconActivity, IconBookmarkFilled, IconCamera,  IconMountain, IconRipple} from "@tabler/icons-react";

export const LocationDetailHero = () => {
    return <section className="bg-white rounded-lg shadow-md overflow-hidden mb-xl">
        <div className="flex justify-between items-start p-lg">
            <div>
                <div className="text-3xl font-bold text-gray-900 mb-xs">Phewa Lake, Pokhara</div>
                <div className="flex items-center gap-xs">
                    <Rating size="sm" defaultValue={4.5} fractions={2} readOnly /> 4.5
                </div>
            </div>
            <IconBookmarkFilled className="text-primary-dark text-3xl" size={24}/>
        </div>
        <div className="relative h-[30vh]">
            <img src={PokharaImage} alt="Phewa Lake in Pokhara" className="w-full h-full object-cover"/>
            <div className="absolute top-xs right-xs  text-white px-md py-xs rounded-md text-sm font-medium">
                Popular Destination
            </div>
        </div>
        <div className="p-lg">
            <p className="text-gray-700 leading-relaxed mb-md">
                Phewa Lake, also known as Fewa Lake, is a freshwater lake in Nepal
                located in the Pokhara Valley. It's the second largest lake in Nepal
                and offers stunning views of the Annapurna mountain range. The lake is
                famous for boating activities, the reflection of Mt. Machhapuchhre in
                its waters, and the Tal Barahi Temple situated on an island in the
                middle of the lake.
            </p>
            <div className="flex flex-wrap gap-xs">
                <div className="flex items-center gap-xxs bg-gray-100 px-md py-xs rounded-full text-sm">
                    <IconMountain className="text-primary" size={16} />
                    <span>Mountains</span>
                </div>
                <div className="flex items-center gap-xxs bg-gray-100 px-md py-xs rounded-full text-sm">
                    <IconRipple className="text-primary" size={16} />
                    <span>Lake</span>
                </div>
                <div className="flex items-center gap-xxs bg-gray-100 px-md py-xs rounded-full text-sm">
                    <IconActivity className="text-primary" size={16} />
                    <span>Outdoor Activities</span>
                </div>
                <div className="flex items-center gap-xxs bg-gray-100 px-md py-xs rounded-full text-sm">
                    <IconCamera className="text-primary" size={16} />
                    <span>Scenic Views</span>
                </div>

            </div>
        </div>
    </section>
}
