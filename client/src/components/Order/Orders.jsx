import React, { useEffect, useState } from 'react';
import { getOrders } from '../../service/api';
import { getUserId } from '../utils/auth';
import { Link, useNavigate } from 'react-router-dom';
import { FaBoxOpen, FaSpinner, FaCalendarAlt, FaChevronDown, FaMapMarkerAlt } from 'react-icons/fa';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrders = async () => {
            const userId = getUserId();
            if (!userId) {
                navigate('/login'); // Security check: kick out if not logged in
                return;
            }

            // Fetch ONLY this user's orders
            const response = await getOrders(userId);
            
            if (response && response.status === 200) {
                setOrders(response.data);
            }
            setLoading(false);
        };

        fetchOrders();
    }, []);

    if (loading) return (
        <div className="h-screen flex justify-center items-center">
            <FaSpinner className="animate-spin text-4xl text-blue-600" />
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">My Orders</h1>

                {orders.length === 0 ? (
                    <div className="bg-white p-12 rounded shadow text-center">
                        <FaBoxOpen className="mx-auto text-6xl text-gray-300 mb-4" />
                        <h2 className="text-xl font-bold text-gray-600">No orders found</h2>
                        <p className="text-gray-500 mt-2">Looks like you haven't placed an order yet.</p>
                        <button 
                            onClick={() => navigate('/')}
                            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700"
                        >
                            Start Shopping
                        </button>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order) => (
                            <div key={order._id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                
                                {/* Order Header */}
                                <div className="bg-gray-50 p-4 border-b border-gray-200 flex flex-col md:flex-row justify-between gap-4">
                                    <div className="flex gap-6 text-sm text-gray-600">
                                        <div>
                                            <p className="font-bold uppercase text-xs text-gray-400">Order Placed</p>
                                            <p className="font-medium text-gray-800 flex items-center gap-1">
                                                <FaCalendarAlt className="text-gray-400"/>
                                                {new Date(order.createdAt).toLocaleDateString("en-IN")}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-bold uppercase text-xs text-gray-400">Total</p>
                                            <p className="font-medium text-gray-800">₹{order.totalAmount}</p>
                                        </div>
                                        <div>
                                            <p className="font-bold uppercase text-xs text-gray-400">Ship To</p>
                                            <p className="font-medium text-gray-800 flex items-center gap-1 cursor-pointer hover:text-blue-600 group relative">
                                                {order.shippingAddress.name || "My Address"} <FaChevronDown className="text-xs"/>
                                                {/* Tooltip for full address */}
                                                <span className="absolute top-6 left-0 bg-gray-800 text-white text-xs p-2 rounded w-48 hidden group-hover:block z-10">
                                                    {order.shippingAddress.line1}, {order.shippingAddress.city}, {order.shippingAddress.zip}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500">Order # {order._id.slice(-6).toUpperCase()}</p>
                                        {/* <Link to={`/order/${order._id}`} className="text-blue-600 text-sm hover:underline">View Invoice</Link> */}
                                    </div>
                                </div>

                                {/* Order Items */}
                                <div className="p-4">
                                    <div className="mb-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            order.orderStatus === 'Delivered' ? 'bg-green-100 text-green-700' :
                                            order.orderStatus === 'Cancelled' ? 'bg-red-100 text-red-700' :
                                            'bg-yellow-100 text-yellow-700'
                                        }`}>
                                            {order.orderStatus || 'Processing'}
                                        </span>
                                    </div>

                                    {order.products.map((item, index) => (
                                        <div key={index} className="flex gap-4 mb-4 last:mb-0">
                                            <Link to={`/product/${item.productId}`}>
                                            <div className="w-20 h-20 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center border">
                                                <FaBoxOpen className="text-gray-400 text-2xl"/>
                                            </div>
                                            </Link>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-gray-800">Product ID: {item.productId.slice(-6).toUpperCase()}</h3>
                                                <p className="text-sm text-gray-500">Quantity: {item.qty}</p>
                                                <p className="text-sm font-bold text-gray-900 mt-1">₹{item.price}</p>
                                            </div>
                                        
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;