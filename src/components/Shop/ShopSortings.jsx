import React from 'react';
import './ShopSorting.css'
const ShopSortings = () => {
    return (
        <div className="categories">
            <ul className="category-list">
                <h5>CATEGORIES</h5>
                <li className="category-item">
                    <span>All</span>
                    <span>(4)</span>
                </li>
                <li className="category-item">
                    <span>Accesssories</span>
                    <span>(3)</span>
                </li>
                <li className="category-item">
                    <span>Box</span>
                    <span>(5)</span>
                </li>
                <li className="category-item">
                    <span>chair</span>
                    <span>(2)</span>
                </li>
                <li className="category-item">
                    <span>Deco</span>
                    <span>(4)</span>
                </li>
                <li className="category-item">
                    <span>Furniture</span>
                    <span>(2)</span>
                </li>
                <li className="category-item">
                    <span>Glass</span>
                    <span>(4)</span>
                </li>
                <li className="category-item">
                    <span>Sofa</span>
                    <span>(2)</span>
                </li>
            </ul>
            <ul className="category-list">
                <h5>FILTER BY</h5>
                <div className="category">
                    <label for="customRange1" className="form-label" style={{ marginTop: "30px" }}>Price</label>
                    <input type="range" className="form-range" id="customRange1" />
                </div>
                <div className="category">
                    <label for="customRange1" className="form-label" style={{ marginTop: "30px" }}>Size</label>
                    <div className="form-check">
                        <div className="checkBox">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                            <label className="form-check-label" for="flexCheckDefault1">
                                Large
                            </label>
                        </div>

                        <span>(2)</span>
                    </div>
                    <div className="form-check">
                        <div className="checkBox">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                            <label className="form-check-label" for="flexCheckChecked2">
                                Medium
                            </label>
                        </div>
                        <span>(2)</span>
                    </div>
                    <div className="form-check">
                        <div className="checkBox">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked3" />
                            <label className="form-check-label" for="flexCheckChecked3">
                                Small
                            </label>
                        </div>
                        <span>(2)</span>
                    </div>
                    <div className="form-check">
                        <div className="checkBox">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked4" />
                            <label className="form-check-label" for="flexCheckChecked4">
                                Extra Small
                            </label>
                        </div>
                        <span>(2)</span>
                    </div>
                </div>
                <div className="category">
                    <label for="customRange1" className="form-label" style={{ marginTop: "30px" }}>Color</label>
                    <div className="form-check">
                        <div className="checkBox">
                            <input className="form-check-input grey" type="checkbox" value="" id="flexCheckDefault5" />
                            <label className="form-check-label" for="flexCheckDefault5">
                                Grey
                            </label>
                        </div>
                        <span>(2)</span>
                    </div>
                    <div className="form-check">
                        <div className="checkBox">
                            <input className="form-check-input white" type="checkbox" value="" id="flexCheckChecked6" />
                            <label className="form-check-label" for="flexCheckChecked6">
                                White
                            </label>
                        </div>
                        <span>(2)</span>
                    </div>
                    <div className="form-check">
                        <div className="checkBox">
                            <input className="form-check-input black" type="checkbox" value="" id="flexCheckChecked7" />
                            <label className="form-check-label" for="flexCheckChecked7">
                                Black
                            </label>
                        </div>
                        <span>(2)</span>
                    </div>
                    <div className="form-check">
                        <div className="checkBox">
                            <input className="form-check-input camel" type="checkbox" value="" id="flexCheckChecked8" />
                            <label className="form-check-label" for="flexCheckChecked8">
                                Camel
                            </label>
                        </div>
                        <span>(2)</span>
                    </div>
                </div>
                <div className="category">
                    <label for="customRange1" className="form-label" style={{ marginTop: "30px" }}>Brand</label>
                    <div className="form-check">
                        <div className="checkBox">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                            <label className="form-check-label" for="flexCheckDefault1">
                                Studio Design
                            </label>
                        </div>

                        <span>(2)</span>
                    </div>
                    <div className="form-check">
                        <div className="checkBox">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                            <label className="form-check-label" for="flexCheckDefault1">
                                Graphic Corner
                            </label>
                        </div>

                        <span>(2)</span>
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default ShopSortings;
