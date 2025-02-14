import React from 'react'
import { useAccount } from 'wagmi'
import { QRCodeCanvas } from 'qrcode.react'

const ReceivePage = () => {
    const { address, isConnected } = useAccount()
    const copyToClipboard = () => {
        if (address) {
            navigator.clipboard
                .writeText(address)
                .then(() => alert('Address copied to clipboard'))
                .catch((err) => console.error('Error copying address:', err))
        }
    }
    if (!isConnected) {
        return (
            <div>Please connect your wallet.</div>
        )
    }
    return (
        <div className='p-4'>
            <h1 className='text-xl font-bold mb-4'>Receive</h1>
            <div className='mb-4'>
                <p>Your wallet address:</p>
                <div className='flex items-center gap-2'>
                    <span className=' p-2 rounded break-all'>
                        {address}
                    </span>
                    <button
                        onClick={copyToClipboard}
                        className='bg-blue-500 text-white px-2 py-1 rounded'>
                        Copy
                    </button>
                </div>
            </div>
            <div>
                <p>Scan QR Code to receive funds:</p>
                <div className={'flex justify-center mt-10'}>
                    <QRCodeCanvas value={address} size={256} />
                </div>
            </div>
        </div>
    )
}

export default ReceivePage
