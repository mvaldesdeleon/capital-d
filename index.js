module.exports = function D(t) {
    return new Proxy(typeof t === 'object' ? t : {}, {
        get(t, p, r) {
            if (p === '_c_a_p_i_t_a_l__d_') return true;
            if (typeof t[p] === 'object' && !t[p]._c_a_p_i_t_a_l__d_) return t[p] = D(t[p]);
            else if (typeof t[p] === 'undefined') return t[p] = D();
            else return t[p];
        }
    });
};
