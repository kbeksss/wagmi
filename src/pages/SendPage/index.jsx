import React, { useState } from 'react'
import { useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'

const SendPage = () => {
    const [recipient, setRecipient] = useState('')
    const [amount, setAmount] = useState('')

    const { data: hash, isPending, sendTransaction } = useSendTransaction()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const to = formData.get('address')
        const value = formData.get('value')
        sendTransaction({ to, value: parseEther(value) })
    }
    console.log('hash', hash)
    return (
        <div className='p-4'>
            <h1 className='text-xl font-bold mb-4'>Send Transaction</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <label>
                    Recipient Address:
                    <input
                        type='text'
                        placeholder='0x...'
                        value={recipient}
                        name={'address'}
                        onChange={(e) => setRecipient(e.target.value)}
                        className='border p-2 rounded'
                        required
                    />
                </label>
                <label>
                    Amount (ETH):
                    <input
                        type='number'
                        name={'value'}
                        placeholder='0.01'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className='border p-2 rounded'
                        required
                    />
                </label>
                <button
                    type='submit'
                    disabled={isPending || !sendTransaction}
                    className='bg-blue-500 text-white px-4 py-2 rounded'>
                    {isPending ? 'Sending...' : 'Send'}
                </button>
            </form>
        </div>
    )
}

export default SendPage
