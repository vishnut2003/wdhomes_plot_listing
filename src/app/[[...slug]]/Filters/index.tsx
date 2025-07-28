import { Button } from '@/components/ui/button'
import { RiArrowDownSLine, RiEqualizerLine } from '@remixicon/react'
import React from 'react'

const FiltersButtons = () => {
    return (
        <div>
            <div
                className='flex flex-wrap items-center gap-[20px]'
            >
                <Button
                    variant={"borderStyle"}
                >
                    <p>Price</p>
                    <RiArrowDownSLine
                        size={20}
                    />
                </Button>

                <Button
                    variant={"borderStyle"}
                >
                    <p>Bed</p>
                    <RiArrowDownSLine
                        size={20}
                    />
                </Button>

                <Button
                    variant={"borderStyle"}
                >
                    <p>Sq. Ft.</p>
                    <RiArrowDownSLine
                        size={20}
                    />
                </Button>

                <Button
                    variant={"borderStyle"}
                >
                    <RiEqualizerLine
                        size={20}
                    />
                    <p>More</p>
                </Button>
            </div>
        </div>
    )
}

export default FiltersButtons